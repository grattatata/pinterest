// action
const LOAD = "posts/LOAD";

// initialstate
const initialState = {
  list: [
    {
      postId: 1,
      nickname: "leehs",
      imageUrl: "/images/cancle.png",
    },
    {
      postId: 2,
      nickname: "leedam",
      imageUrl: "/images/cancle.png",
    },
    {
      postId: 2,
      nickname: "leechangmin",
      imageUrl: "/images/cancle.png",
    },
  ],
};

// action creator
export const loadPosts = (post_list) => {
  return { type: LOAD, post_list: post_list };
};

// middleware (communic-ate with ec2)
export const loadPostsFB = () => {
  return function (dispatch) {
    // 1. 이미지 파베 스토리지에 저장하는 코드
    // 2. 이미지에서 url 뽑아서 ec2 전달(by axios)
    // 3. 액션 크리에이터에서 액션 객체 생성
    // 4. 액션 객체를 reducer 전달 (dispatch(loadPosts(이미지 Url)))
  };
};

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "posts/LOAD": {
      return { list: action.post_list };
    }
    default:
      return state;
  }
}
