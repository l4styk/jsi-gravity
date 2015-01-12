var fns = require('../index');

// describe("gravity", function() {
//   it("is a fundamental law, so tautologies had better work", function() {
//     expect(true).toBe(true);
//     expect(false).toBeFalsy();
//     expect(0).toBeLessThan(1);
//     expect(1).not.toBeLessThan(0);
//   });
// });

describe('fallingTime', function (){
	it("should tell how long it takes to fall x meters", function() { 
		expect(fns.fallingTime(4)).toBeCloseTo(0.9, 2);
	});
});

describe('distanceFallen', function (){
	it("should take time and return distance", function() { 
		expect(fns.distanceFallen(4)).toEqual(78.4);
	});
});
