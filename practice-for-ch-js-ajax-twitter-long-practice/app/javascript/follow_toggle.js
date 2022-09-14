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

    if (this.followState === "followed") {
      this.unfollow();
    } else {
      this.follow();
    };
  };

  async follow() {
    // Your code here
    const userId = this.toggleButton.dataset.userId;
    const res = await API.followUser(userId)
    // debugger
    await res.json()
  
  }

  async unfollow() {
    // Your code here
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