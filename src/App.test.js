import pubSub from "./store/PubSub";

describe("Testing pubSub Object", () => {
  let sum = () => "sum";
  let add = () => "add";
  let pubSubEvents = pubSub.events;

  test("Testing subscribe method for the first time!", () => {
    console.log("Test1", pubSubEvents);
    expect(pubSub.subscribe("change", sum())).toBe(pubSubEvents.change.length);
    console.log("Test2", pubSubEvents);
  });

  test("Testing subscribe method for the second time!", () => {
    console.log("Test3", pubSub.events);
    expect(pubSub.subscribe("change", add())).toBe(pubSubEvents.change.length);
    console.log("Test4", pubSub.events);
  });

  test("Testing subscribe method with another param!", () => {
    console.log("Test5", pubSub.events);
    expect(pubSub.subscribe("added", add())).toBe(pubSubEvents.added.length);
    console.log("Test6", pubSub.events);
  });

   test("Testing no params publisher method", () => {
    expect(JSON.stringify(pubSub.publish())).toBe(JSON.stringify([]));
  });

 /*  test("Testing publisher method", () => {
    expect(JSON.stringify(pubSub.publish('change','cat'))).toBe(JSON.stringify([]));
  }); */

  /* test("Testing publisher methaod", () => {
    expect(JSON.stringify(pubSub.publish('change',()=>{}))).toBe(JSON.stringify([]));
  }); */
});
