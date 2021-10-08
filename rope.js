class rope{
	constructor(body1,body2,pointA,pointB)
	{
this.pointA=pointA
this.pointB=pointB

var options={
bodyA:body1,
bodyB:body2,
pointB:{x:this.pointA,y:this.pointB}

}
	//create rope constraint here
	rope=Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:70,
		stiffness:0.1
	  })
	  World.add(world,rope);

	}


    //create display() here 
	

}
