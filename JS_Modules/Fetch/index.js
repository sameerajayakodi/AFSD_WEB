// function getData() {
// //   fetch("https://jsonplaceholder.typicode.com/posts")
// //     .then((response) => response.json())
// //     .then((json) => console.log(json))
// //     .catch((err) => console.error("Error:", error))
// //     .finally(() => console.log("Completed!"));
// // }

// // function postData() {
// //   fetch("https://jsonplaceholder.typicode.com/posts", {
// //     method: "POST",
// //     body: JSON.stringify({
// //       title: "foo",
// //       body: "bar",
// //       userId: 1,
// //     }),
// //     headers: {
// //       "Content-type": "application/json; charset=UTF-8",
// //     },
// //   })
// //     .then((response) => response.json())
// //     .then((json) => console.log(json));
// // }

async function getAndDeleteData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();

    const deleteResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + data.id,
      {
        method: "DELETE",
      }
    );

    const res = await deleteResponse.json();

    console.log(data);
    console.log(res);
  } catch (err) {
    console.error(err);
    alert("error");
  }
}

getAndDeleteData();
//---------------------fetch--------------------------------
function hellowWorld(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val === "true") {
        resolve("Success..!");
      } else {
        reject("Error..!");
      }
    }, 5000);
  });
}

async function getHellow() {
  try {
    const data = await hellowWorld("true");
    console.log(data);
  } catch (err) {
    console.error("Error Message " + err);
  }
}

getHellow();
