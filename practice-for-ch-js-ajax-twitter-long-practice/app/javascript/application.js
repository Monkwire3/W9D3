// Entry point for the build script in your package.json
import FollowToggle from "./follow_toggle";
import InfiniteTweets from "./infinite_tweets";
import UsersSearch from "./users_search";
import TweetCompose from "./tweet_compose";
import Followers from "./followers";
import { API } from "./util";

if (process.env.NODE_ENV !== "production") {
  window.API = API;
}

let followToggleSelector = ".follow-toggle";
let infiniteTweetsSelector = ".fetch-tweets-btn";
let usersSearchSelector = ".search-button";
let tweetComposeSelector = ".tweet-actions button";
let followersSelector = ".followers";


document.querySelectorAll(followToggleSelector).forEach((el) => {
  console.log(el)
  new FollowToggle(el);
});

document.querySelectorAll(infiniteTweetsSelector).forEach((el) => {
  console.log(el)
  new InfiniteTweets(el);
});

document.querySelectorAll(usersSearchSelector).forEach((el) => {
  console.log(el)
  new UsersSearch(el);
});

document.querySelectorAll(tweetComposeSelector).forEach((el) => {
  console.log(el)
  new TweetCompose(el);
});

document.querySelectorAll(followersSelector).forEach((el) => {
  console.log(el)
  new Followers(el);
});