import Footer from "@/components/Footer";
import Page from "@/components/Page";
import PageContent from "@/components/PageContent";
import TopBar from "@/components/TopBar";
import UserList from "@/components/UserList";

import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Page>
        <TopBar />
        <PageContent>
          <UserList />
        </PageContent>
        <Footer />
      </Page>
    </>
  );
};

export default Home;
