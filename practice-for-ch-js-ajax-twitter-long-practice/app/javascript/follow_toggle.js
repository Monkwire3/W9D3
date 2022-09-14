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

    if (this.toggleButton.dataset.followState === "followed") {
      this.unfollow();
    } else {
      this.follow();
    };
  };

  async follow() {
    const userId = this.toggleButton.dataset.userId;
    this.toggleButton.setAttribute("data-follow-state", "unfollowed")
    const res = await API.followUser(userId)

    if (res.ok) {
      await res.json();
      this.toggleButton.setAttribute("data-follow-state", "followed")
      this.toggleButton.innerText = "Unfollow"
    } else {
      throw res;
    };
  
  }

  async unfollow() {
    const userId = this.toggleButton.dataset.userId;
    this.toggleButton.setAttribute("data-follow-state", "followed")
    const res = await API.followUser(userId)

    if (res.ok) {
      await res.json();
      this.toggleButton.setAttribute("data-follow-state", "unfollowed")
      this.toggleButton.innerText = "Follow"
    } else {
      throw res;
    };

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