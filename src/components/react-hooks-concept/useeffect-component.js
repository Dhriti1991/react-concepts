import React, { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [post, setPost] = useState([]);
  const [counter, setCounter] = useState(0); //state for counter

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await res.json();
        setPost(result.slice(0, 5));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    // Cleanup function (if needed) (Unmounting, componentWillUnmount)
    return () => {
      console.log("Cleanup if component unmounts");
    };
  }, []); //empty dependency means it will run only once after the first render (Mounting lifecycle hooks: componentDidMount)

  useEffect(() => {
    console.log(post);
  }, [post]); // new post will be added after every update (onclick)

  const AddObjectToArray = () => {
    setPost((previousPost) => [
      ...previousPost,
      {
        userId: 2,
        id: 18,
        title: "newtitle",
        body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
      },
    ]);
  };

  // useEffect(() => {
  //   if (post.length > 0) {
  //     console.log("Posts updated, current counter value:", counter);
  //   }
  // }, [post]); // Runs when the post array updates

  //   useEffect(() => {
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //   }, [counter]); //this will go on as we have given dependency as counter (ComponentDidUpdate lifecycle method), so counter will increment after every update

  //   useEffect(() => {
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //   }, []); //this will give output as 1 as we have given empty dependency (ComponentDidMount lifecycle method), so counter will increment only after the first render

  //   console.log(counter);

  // {
  //   "userId": 2,
  //   "id": 18,
  //   "title": "voluptate et itaque vero tempora molestiae",
  //   "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
  // },

  return (
    <div>
      {post.map((post, index) => (
        <div>
          <p>TItle: {post.title}</p>
          <hr />
        </div>
      ))}

      <button onClick={AddObjectToArray}>Add data</button>
    </div>
  );
};

export default UseEffectComponent;
