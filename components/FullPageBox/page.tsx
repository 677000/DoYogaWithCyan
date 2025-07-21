import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ReactNode } from "react";


export function FullPageBox({ children, title, subtitle, link1, link2 }: { children: ReactNode | String; title?: String; subtitle?: String; link1?: String, link2?: Strubg }) {
    return (
        <section className="w-full h-[200%] md:h-[150%] lg:h-[120%] pb-4 md:py-24 lg:py-32 relative overflow-hidden">
            {/* 英雄区域 - 添加背景视频 */}
            {/* 背景视频 */}
            <div className="absolute inset-0 w-full h-full z-0">
                {children}
                {/* 视频覆盖层，提高文字可读性 */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-background/90 dark:from-primary/20 dark:to-background/95 z-10"></div> */}
            </div>
            <section className="w-full pb-4 md:py-8 lg:py-12">
                <div className="container px-4 md:px-6 relative z-20">
                    <div className="grid gap-6 lg:grid-cols lg:gap-12 items-center">
                    <motion.div
                        className="flex flex-col justify-center space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-[0.5rem] sm:text-5xl xl:text-6xl/none mb-4 md:mb-8">
                            {title}
                        </h1>
                        <p className="max-w-[600px] text-primary-foreground md:text-xl">{subtitle}</p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            {link1 && <Link href="/contact">
                                <Button size="lg">{link1}</Button>
                            </Link>}
                            {link2 && <Link href="#features">
                                <Button size="lg" variant="outline">
                                {link2}
                                </Button>
                            </Link>}
                        </div>
                    </motion.div>
                    </div>
                </div>
            </section>
        </section>
    )
}

    