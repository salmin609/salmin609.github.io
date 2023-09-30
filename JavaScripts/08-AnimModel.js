"use strict";

function main()
{
    var canvas = document.querySelector("#canvas");

    var gl = canvas.getContext("webgl");

    if(!gl)
    {
        console.error("Ne WebGL Available!");
        return;
    }

    var ext = gl.getExtension('OES_texture_float');

    if(!ext)
    {
        console.error("No Extension of OES_texture_float!");
        return;
    }

    var programInfo = webglUtils.createProgramInfo(gl, ["vs", "fs"]);

    var arrays = {
        position: {
          numComponents: 2,
          data: [
           0,  1,  // 0
           0, -1,  // 1
           2,  1,  // 2
           2, -1,  // 3
           4,  1,  // 4
           4, -1,  // 5
           6,  1,  // 6
           6, -1,  // 7
           8,  1,  // 8
           8, -1,  // 9
          ],
        },
        boneNdx: {
          numComponents: 4,
          data: [
            0, 0, 0, 0,  // 0
            0, 0, 0, 0,  // 1
            0, 1, 0, 0,  // 2
            0, 1, 0, 0,  // 3
            1, 0, 0, 0,  // 4
            1, 0, 0, 0,  // 5
            1, 2, 0, 0,  // 6
            1, 2, 0, 0,  // 7
            2, 0, 0, 0,  // 8
            2, 0, 0, 0,  // 9
          ],
        },
        weight: {
          numComponents: 4,
          data: [
           1, 0, 0, 0,  // 0
           1, 0, 0, 0,  // 1
          .5,.5, 0, 0,  // 2
          .5,.5, 0, 0,  // 3
           1, 0, 0, 0,  // 4
           1, 0, 0, 0,  // 5
          .5,.5, 0, 0,  // 6
          .5,.5, 0, 0,  // 7
           1, 0, 0, 0,  // 8
           1, 0, 0, 0,  // 9
          ],
        },
    
        indices: {
          numComponents: 2,
          data: [
            0, 1,
            0, 2,
            1, 3,
            2, 3, //
            2, 4,
            3, 5,
            4, 5,
            4, 6,
            5, 7, //
            6, 7,
            6, 8,
            7, 9,
            8, 9,
          ],
        },
      };

    var bufferInfo = webglUtils.createBufferInfoFromArrays(gl, arrays);
    var numBones = 4;
    var boneArray = new Float32Array(numBones * 16);
    var boneMatrixTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, boneMatrixTexture);

    //TEXTURE SETTINGS.
    //NEAREST?
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    var uniforms = {
        projection: m4.orthographic(-20, 20, -10, 10, -1, 1),
        view: m4.translation(-6, 0, 0),
        boneMatrixTexture,
        numBones,
        color: [1,0,0,1],
    };

    var boneMatrices = [];
    var bones = [];
    var bindPos = [];

    for(var i = 0; i < numBones; ++i)
    {
        boneMatrices.push(new Float32Array(boneArray.buffer, i * 4 * 16, 16));
        bindPos.push(m4.identity());
        bones.push(m4.identity());
    }

    function computeBoneMatrices(bones, angle)
    {
        var m = m4.identity();
        m4.zRotate(m, angle, bones[0]);
        m4.translate(bones[0], 4, 0, 0, m);
        m4.zRotate(m, angle, bones[1]);
        m4.translate(bones[1], 4, 0, 0, m);
        m4.zRotate(m, angle, bones[2]);
    }

    computeBoneMatrices(bindPos, 0);

    var bindPoseInv = bindPos.map(function(m) {
        return m4.inverse(m);
    });

    function render(time)
    {
        webglUtils.resizeCanvasToDisplaySize(gl.canvas);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
        m4.orthographic(-aspect * 10, aspect * 10, -10, 10, -1, 1, uniforms.projection);

        var t = time * 0.001;
        var angle = Math.sin(t) * 0.8;
        computeBoneMatrices(bones, angle);

        bones.forEach(function(bone, ndx)
        {
            m4.multiply(bone, bindPoseInv[ndx], boneMatrices[ndx]);
        });

        gl.useProgram(programInfo.program);

        gl.bindTexture(gl.TEXTURE_2D, boneMatrixTexture);
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            4,
            numBones,
            0,
            gl.RGBA,
            gl.FLOAT,
            boneArray
        );

        webglUtils.setBuffersAndAttributes(gl, programInfo, bufferInfo);

        webglUtils.setUniforms(programInfo, uniforms);

        webglUtils.drawBufferInfo(gl, bufferInfo, gl.LINES);

        drawAxis(uniforms.projection, uniforms.view, bones);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    var axisProgramInfo;
  var axisBufferInfo;
  function drawAxis(projection, view, bones) 
  {
    if (!axisProgramInfo) {
      axisProgramInfo = webglUtils.createProgramInfo(gl, ['vs2', 'fs']);
      axisBufferInfo  = webglUtils.createBufferInfoFromArrays(gl, {
        position: {
          numComponents: 2,
          data: [
            0, 0,
            1, 0,
          ],
        },
      });
    }

    var uniforms = {
      projection: projection,
      view: view,
    };

    gl.useProgram(axisProgramInfo.program);
    webglUtils.setBuffersAndAttributes(gl, axisProgramInfo, axisBufferInfo);

    for (var i = 0; i < 3; ++i) {
      drawLine(bones[i], 0, [0 ,1, 0, 1]);
      drawLine(bones[i], Math.PI * 0.5, [0, 0, 1, 1]);
    }

    function drawLine(mat, angle, color) {
      uniforms.model = m4.zRotate(mat, angle);
      uniforms.color = color;
      webglUtils.setUniforms(axisProgramInfo, uniforms);
      webglUtils.drawBufferInfo(gl, axisBufferInfo, gl.LINES);
    }
  }
}

main();

