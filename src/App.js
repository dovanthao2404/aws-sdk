import logo from "./logo.svg";
import "./App.css";
import { S3 } from "aws-sdk";
import { useEffect, useState } from "react";

function App() {
  const s3 = new S3({
    region: "ap-southeast-1",
  });

  const [signedUrl, setSignedUrl] = useState("");

  useEffect(() => {
    s3.getSignedUrl(
      "getObject",
      {
        Bucket: "demotestiframe",
        Key: "1714139825433.png",

      },
      (err, data) => {
        console.log(data);
        setSignedUrl(data);
      }
    );
  }, []);

  const getObject = async (event) => {
    /**
     * DeleteObject
     */
    // s3.deleteObject({
    //      Bucket: "demotestiframe",
    //     Key: "hihi/index.html",
    // }, (err, data) => {
    //   console.log(data)
    // })
    /**
     * getObject
     */
    // s3.getObject(
    //   {
    //     Bucket: "demotestiframe",
    //     Key: "index.html",
    //   },
    //   (error, data) => {
    //     console.log(data);
    //   }
    // );
    /**
     * upload
     */
  };

  const uploadFile = (event) => {
    console.log(event.target.files[0]);
    s3.upload(
      {
        Bucket: "demotestiframe",
        Key: `${Date.now()}.png`,
        Body: event.target.files[0],
      },
      (err, data) => {
        console.log(data);
      }
    );
  };

  const downloadObject = (event) => {};
  console.log(signedUrl);
  return (
    <div className="App">
      <header className="App-header">
        {signedUrl && <img src={signedUrl} className="App-logo" alt="logo" />}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            getObject();
          }}
        >
          Get Object
        </button>
        <input type="file" name="" id="" onChange={uploadFile} />
        <button onClick={downloadObject}>Download</button>
      </header>
    </div>
  );
}

export default App;
