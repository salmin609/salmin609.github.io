import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';

package strategy;

public interface AddObjectBehavior{
    public void Add();
}

class AddBoxBehavior implements AddObjectBehavior{
    @Override public void Add()
    {
        System.out.println("Add Box");
    }
}

class AddSphereBehavior implements AddObjectBehavior{
    @Override public void Add()
    {
        System.out.println("Add Sphere");
    }
}

public class ObjectAddManager{

    private AddObjectBehavior addObjectBehavior;

    public ObjectAddManager(AddObjectBehavior addObjectBehavior_)
    {
        this.addObjectBehavior = addObjectBehavior_;
    }

    public void Add()
    {
        addObjectBehavior.Add();
    }
}

export {ObjectAddManager};