import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener("click", (e) =>{
      this.handleClick(e);
    });
  }

  async handleClick(event) {
    // Your code here
    event.preventDefault();
    console.log(this.toggleButton.dataset.userId)

    if (this.followState === "followed") {
      this.unfollow();
    } else {
      this.follow();
    };
  };

  async follow() {
    // Your code here
    const userId = this.toggleButton.dataset.userId;

    return $.ajax({
      method: 'post',
      url: `/users/${userId}/follow`,
      data: {
        follow: userId
      },
      datatype: 'JSON'
    });

    // fetch(`/users/${userId}/follow`, {
    //   method: 'post'
    // }).then((res) => {
    //   console.log(res)
    // });
  }

  async unfollow() {
    // Your code here

    return $.ajax({
      method: 'delete',
      url: `/users/${userId}/follow`,
      data: {
        follow: userId
      },
      datatype: 'JSON'
    });
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}