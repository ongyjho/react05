import { createStore } from "./tiny-redux";

function reducer(state = { counter: 0 }, action) {
  console.log("console:" + action.type);
  switch (action.type) {
    case "inc":
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return { ...state };
  }
}

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({
  type: "inc" // action 객체
});

store.dispatch({
  type: "fetch-user" // action 객체
});

const myMiddleware = (store) => (dispatch) => (action) => {
  // dispatch(action);
};

function yourMiddleware(store) {
  return function (dispatch) {
    return function (action) {
      // dispatch(action);
    };
  };
}

function ourMiddileware(store, dispatch, action) {
  // dispatch(action);
}

myMiddleware(store)(store.dispatch)({ type: "inc" });
ourMiddileware(store, store.dispatch, { type: "inc" });
//이 두가지의 차이는 뭐고 myMiddleware의 장점이 뭔가?

const add1 = function (a, b) {
  return a + b;
};
const add2 = function (a) {
  return function (b) {
    return a + b;
  };
};

//30 두개는 같은 코드이다.
add1(10, 20);
// 소비자는 최종 계산에 개입할 여지가 조금도 없다.

add2(10)(20);

const adddd = add2(10);
adddd(20);
//사용자가 개입할 여지가 있다!!
//함수 합성이 가능하다.개입할 수 있는 여지를 열어주는 코딩 테크닉 =커링

// 여러개 해놓고 돌려놔야 하잖아. 다른 미들웨어도 사용해야하니까.



