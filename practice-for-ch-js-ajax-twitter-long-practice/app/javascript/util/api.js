const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {

  options.headers = {
    ...options.headers,
    "X-CSRF-TOKEN": csrfToken,
    "Accept": "application/json"
  };
  
  return await fetch(url, options);
}

export function followUser(id) {

  console.log("hello")
  return customFetch(`${id}/follow`, {method: 'post'})

}

export function unFollowUser(id) {
  console.log("hi")
  return customFetch(`${id}/follow`, {method: 'delete'})


}
