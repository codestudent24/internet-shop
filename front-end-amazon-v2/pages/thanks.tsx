import Heading from "@/ui/Heading";
import Meta from "@/ui/Meta";
import Layout from "@/ui/layout/Layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ThanksPage: NextPage = () => {
  const { replace } = useRouter()
  useEffect(() => {
    setTimeout(() => {
      replace('/')
    }, 1000)
  }, [replace])

  return (
    <Meta title="Thanks">
      <Layout>
        <Heading>Thanks!</Heading>
      </Layout>
    </Meta>
  )
}

export default ThanksPage