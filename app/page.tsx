import Image from "next/image";
import { AiFillAndroid } from "react-icons/ai";

export default function Home() {
  return (
    <main
      className="flex h-screen overflow-hidden text-white"
      style={{
        backgroundColor: "#1C1B1F",
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
      }}
    >
      <div
        className="md:w-2/4 flex flex-col justify-evenly md:justify-center items-center md:rounded-r-3xl"
        style={{ backgroundColor: "#2A2730" }}
      >
        <div className="h-60"></div>
        <div className="m-6">
          <Image
            className="mb-8"
            width={160}
            height={160}
            src={"/logo.png"}
            alt={"Vocab"}
          />
          <h1 className="text-5xl font-bold mb-8">Vocab</h1>
          <p className="text-xl mb-7">
            欢迎使用 Vocab , 一个利用 AI 技术的英语单词学习软件。
          </p>
          <a
            href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=qET5Zu0100tgyho9RgK8_J3WHKyilfY4&authKey=OduBnKUIBO3eyFfzRfYmKMPyr1seO5w63YKlZQVhQWwtx0dh2iSCv45q6SuJ2al5&noverify=0&group_code=304469759"
            className="py-3 px-5 bg-white rounded-lg text-black flex items-center w-fit"
            target="_blank"
          >
            <span className="pr-1">
              <AiFillAndroid size={25} />
            </span>
            安卓版下载
          </a>
        </div>
        <div className="h-60"></div>
        <div className="flex justify-center overflow-hidden ">
          <img className="md:hidden h-fit" src={"/vocab.png"} alt={"vocab"} />
        </div>
      </div>
      <div className="md:w-full"></div>
    </main>
  );
}
