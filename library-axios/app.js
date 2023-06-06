// axios
//   .get("https://swipa.dev/people/1")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//     alert(err.message);
//   });

// menggunakan async await
const getPeople = async (id) => {
  try {
    const res = await axious.get("https://swipa.dev/people/1");
    console.log(res.data);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.response.status);
    console.log(error.response.data);
  }
};
