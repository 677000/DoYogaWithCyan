"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"
import { motion } from "framer-motion"
import { ProductCard } from "@/components/ProductCard"
import API from "@/api/notion_connect_node"
import mockData from "@/api/data_mock"
import { useEffect } from "react"
import { FullPageBox } from "@/components/FullPageBox/page"

/** 板块：
 * 轮播图-咨询入口、
 * 最新活动-活动入口、
 * 课程入口快捷链接-成为会员入口、
 * 一对一课程入口
 * 预约体验、初学指南快捷入口
 * 评价展示
 * footer
 * */

export default function Home() {
  const { t } = useLanguage();

  const individual = [
    {
      title: t("home.individual.items.0.title"),
      description: t("home.individual.items.0.description"),
    },
    {
      title: t("home.individual.items.1.title"),
      description: t("home.individual.items.1.description"),
    },
    {
      title: t("home.individual.items.2.title"),
      description: t("home.individual.items.2.description"),
    },
    {
      title: t("home.individual.items.3.title"),
      description: t("home.individual.items.3.description"),
    },
    {
      title: t("home.individual.items.4.title"),
      description: t("home.individual.items.4.description"),
    },
    {
      title: t("home.individual.items.5.title"),
      description: t("home.individual.items.5.description"),
    },
  ];

  const products = [
    {
      id: 1,
      title: "Sharp Scanner",
      description: "Handheld blue laser 3d scanner with industrial grade",
      image: "/products/sharp.png?height=300&width=400",
      category: "industrial grade",
      disabled: true,
    },
    {
      id: 2,
      title: "Extr Scanner",
      description: "Handheld blue laser 3d scanner with industrial grade.",
      image: "/products/extr.png?height=300&width=400",
      category: "industrial grad",
      disabled: true,
    },
    {
      id: 3,
      title: "ArrayBlock Scanner",
      description: "...",
      image: "/products/array.png?height=300&width=400",
      category: "hardware",
      disabled: true,
    },
  ];

  // Define features data directly in the component
  const features = [
    {
      title: t("home.features.items.0.title"),
      description: t("home.features.items.0.description"),
    },
    {
      title: t("home.features.items.1.title"),
      description: t("home.features.items.1.description"),
    },
    {
      title: t("home.features.items.2.title"),
      description: t("home.features.items.2.description"),
    },
  ];

  useEffect(() => {
    console.log('test API connection');
    
    (async () => {
      // 获取并打印数据库内容
      const records = await API.getDatabaseContent();
      console.log(`数据库中有 ${records.length} 条记录`);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-12">
      {/* 英雄区域 - 添加背景视频 */}
      <FullPageBox title={t("home.hero.title")} link1={t("home.hero.cta1")} link2={t("home.hero.cta2")} subtitle={t("home.hero.description")}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/sharp.mp4" type="video/mp4" />
          {/* 备用图像，当视频无法播放时显示 */}
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </video>
      </FullPageBox>

      {/* 最新消息 */}
      <section className="w-full pb-4 md:py-8 lg:py-12">
        <div className="container px-4 md:px-6 relative z-20">
          <div className="grid gap-6 lg:grid-cols lg:gap-12 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-base sm:text-lg xl:text-xl sm:text-5xl xl:text-6xl/none text-center px-8 md:px-32">
                {t("news.title")}
              </h2>
              <p className="text-muted-foreground text-center">{t("news.description")}</p>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.newsData.slice(0, 3).map((item, index) => (
            <ProductCard key={item.id} product={item} index={index} t={t} />
          ))}
        </div>
      </section>

      {/* 更多课程 */}
      <FullPageBox title={t("home.hero.title")} subtitle={t("home.hero.description")}>
        <Image
          src="/me-brave.jpeg?height=800&width=550"
          alt="Hero Image"
          width={1000}
          height={550}
          className="rounded-lg object-cover"
          priority
        />
      </FullPageBox>

      {/* about me */}
      <section className="w-full pb-4 md:py-8 lg:py-12">
        <div className="container px-4 md:px-6 relative z-20">
          <div className="grid gap-6 lg:grid-cols lg:gap-12 items-center">
            <p className="text-base sm:text-lg xl:text-xl sm:text-5xl xl:text-6xl/none text-center px-8 md:px-32">
              {t("about.hero.title")}
            </p>
            <p className="text-muted-foreground text-center">
              {t("about.hero.subtitle")}
            </p>
            <div className="grid gap-4 lg:grid-cols lg:gap-8 items-end">
              <motion.div
                className="mx-auto lg:ml-auto flex justify-center"
                // className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                    src="/me-brave.jpeg?height=800&width=550"
                    alt="Hero Image"
                    width={800}
                    height={55}
                    className="rounded-lg object-cover"
                    priority
                  />
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{margin: "0 10% 0 10%"}}
            >
              <div className="text-muted-foreground text-center mb-4 md:mb-8">{t("about.hero.identity.sale")}</div>
              <div className="text-muted-foreground text-center mb-4 md:mb-8">{t("about.hero.identity.engineer")}</div>
              <div className="text-muted-foreground text-center">{t("about.hero.identity.hobby")}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* about Blackboxcv */}
      <section className="w-full pb-4 md:py-8 lg:py-12">
        <div className="container px-4 md:px-6 relative z-20">
          <div className="grid gap-6 lg:grid-cols lg:gap-12 items-center">
            <p className="text-base sm:text-lg xl:text-xl sm:text-5xl xl:text-6xl/none text-center px-8 md:px-32">
              {t("blackboxcv.hero.title")}
            </p>
            <p className="text-muted-foreground text-center">
              {t("blackboxcv.hero.subtitle")}
            </p>
            <div className="grid gap-4 lg:grid-cols lg:gap-8 items-end">
              <motion.div
                className="mx-auto lg:ml-auto flex justify-center"
                // className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                    src="/products/all.jpeg?height=800&width=550"
                    alt="Hero Image"
                    width={800}
                    height={550}
                    className="rounded-lg object-cover"
                    priority
                  />
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{margin: "0 10% 0 10%"}}
            >
              <p className="text-muted-foreground text-left mb-4 md:mb-8 md:text-xl">{t("blackboxcv.hero.description1")}</p>
              <p className="text-muted-foreground text-left mb-4 md:mb-8 md:text-xl">{t("blackboxcv.hero.description2")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 特性区域-工业测量 */}
      <section id="features" className="w-full py-6 mb-[10rem] md:py-8 lg:py-8">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                {t("home.features.title")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("home.features.subtitle")}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("home.features.description")}
              </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="grid gap-2 p-6 border rounded-lg shadow-sm hover:shadow-md transition-all bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          {/* 产品展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} t={t} />
            ))}
          </div>
        </div>
      </section>
      {/* 特性区域-企业决策者和个人 */}
      <section id="individual" className="w-full py-6 mb-[18rem] md:py-8 lg:py-8">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                {t("home.individual.title")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("home.individual.subtitle")}
              </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("home.individual.description")}
                </p>
            </div>
          </motion.div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {individual.map((item, index) => (
              <motion.div
                key={index}
                className="grid gap-2 p-6 border rounded-lg shadow-sm hover:shadow-md transition-all bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 号召行动区域 */}
      <section className="w-full py-6 md:py-12 lg:py-12 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("home.cta.title")}</h2>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">{t("home.cta.description")}</p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button size="lg" className="w-full bg-white text-primary hover:bg-gray-100">
                  {t("home.cta.button")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

