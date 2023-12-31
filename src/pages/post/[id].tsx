import Head from "next/head";

const SinglePostPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="border-sl flex-column  w-full justify-center  border-x md:max-w-2xl">
          <div className="border-b border-slate-400 p-4">POST VIEW</div>
        </div>
      </main>
    </>
  );
};

export default SinglePostPage;
