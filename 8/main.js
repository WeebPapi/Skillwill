function expo(num, exp, cb) {
  if (exp === 0) {
    return 1;
  } else {
    return cb(expo(num, exp - 1, cb), num);
  }
}
console.log(expo(5, 3, (num, prev) => num * prev));

const body = document.body;

function post(title, desc, id) {
  const container = document.createElement("div");
  container.style.border = "3px solid black";
  const heading = document.createElement("h1");
  heading.style.fontSize = "36px";
  heading.innerHTML = title;
  const description = document.createElement("p");
  description.innerHTML = desc;
  const numberId = document.createElement("p");
  numberId.innerHTML = id;
  container.append(heading, description, numberId);
  body.append(container);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((res) => res.map((el) => post(el.title, el.body, el.id)))
  .catch((res) => Error(res));

const user = {
  name: "saba",
  age: 29,
  items: ["phone", "wallet", "keys"],
  friends: { gio: "", temo: "", mate: "" },
};

async function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const copy = [];
    for (const item of obj) {
      copy.push(await deepCopy(item));
    }
    return copy;
  }
  const copy = {};
  for (const [key, value] of Object.entries(obj)) {
    copy[key] = await deepCopy(value);
  }
  return copy;
}

deepCopy(user).then((res) => {
  console.log(res);
});
