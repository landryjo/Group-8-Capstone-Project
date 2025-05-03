import React from 'react'
import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function LabMembers() {
  return (
    <div className="m-4">
      <h2 className="text-4xl font-bold mb-6">Lab Members</h2>
      <section>
        <h2 className="text-2xl font-bold mb-2">Founder/Director</h2>
        <p className="mb-2">name: Victor S. Sheng</p>
        <p className="mb-2">email: victor.sheng@ttu.edu</p>
        <p className="mb-6">status: Founder</p>

      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Faculty Members</h2>
        <p className="mb-2">name: Zhen Xu</p>
        <p className="mb-2">email: zhen.xu@ttu.edu</p>
        <p className="mb-6">status: Associate Director</p>

        <p className="mb-2">name: Lin Gao</p>
        <p className="mb-2">email: lin.gao@ttu.edu</p>
        <p className="mb-6">status: Research Scientist</p>

        <p className="mb-2">name: Rui Xu</p>
        <p className="mb-2">email: rui.xu@ttu.edu</p>
        <p className="mb-6">status: Research Scientist</p>

        <p className="mb-2">name: Hao Zhan</p>
        <p className="mb-2">email: hao.zhan@ttu.edu</p>
        <p className="mb-6">status: Associate Director</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Graduate Students</h2>
        <p className="mb-2">name: Zhong Chen</p>
        <p className="mb-2">email: zhong.chen@ttu.edu</p>
        <p className="mb-6">status: Graduate Research Assistant</p>

        <p className="mb-2">name: Yan He</p>
        <p className="mb-2">email: yan.he@ttu.edu</p>
        <p className="mb-6">status: Graduate Research Assistant</p>

        <p className="mb-2">name: Dong Wu</p>
        <p className="mb-2">email: dong.wu@ttu.edu</p>
        <p className="mb-6">status: Graduate Research Assistant</p>

        <p className="mb-2">name: Kai Zhang</p>
        <p className="mb-2">email: kai.zhang@ttu.edu</p>
        <p className="mb-6">status: Graduate Research Assistant</p>

        <p className="mb-2">name: Yi Hao</p>
        <p className="mb-2">email: yi.hao@ttu.edu</p>
        <p className="mb-6">status: Graduate Research Assistant</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Undergraduate Studetns</h2>
        <p className="mb-2">name: Pei Zhao</p>
        <p className="mb-2">email: pei.zhao@ttu.edu</p>
        <p className="mb-6">status: Undergraduate Research Assistant</p>

        <p className="mb-2">name: Jun Qu</p>
        <p className="mb-2">email: jun.qu@ttu.edu</p>
        <p className="mb-6">status: Undergraduate Research Assistant</p>

        <p className="mb-2">name: Liang Zhao</p>
        <p className="mb-2">email: liang.zhao@ttu.edu</p>
        <p className="mb-6">status: Undergraduate Research Assistant</p>

        <p className="mb-2">name: Guang Liu</p>
        <p className="mb-2">email: guang.liu@ttu.edu</p>
        <p className="mb-6">status: Undergraduate Research Assistant</p>

        <p className="mb-2">name: Feng Zhuang</p>
        <p className="mb-2">email: feng.zhuang@ttu.edu</p>
        <p className="mb-6">status: Undergraduate Research Assistant</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Alumni Members</h2>
        <p className="mb-2">name: Xue Zhou</p>
        <p className="mb-2">email: xue.zhou@ttu.edu</p>
        <p className="mb-6">status: N/A</p>

        <p className="mb-2">name: Guo Li</p>
        <p className="mb-2">email: guo.li@ttu.edu</p>
        <p className="mb-6">status: N/A</p>

        <p className="mb-2">name: Jing Fang</p>
        <p className="mb-2">email: jing.fang@ttu.edu</p>
        <p className="mb-6">status: N/A</p>

        <p className="mb-2">name: Hui Yuan</p>
        <p className="mb-2">email: hui.yuan@ttu.edu</p>
        <p className="mb-6">status: N/A</p>

      </section>
    </div>
  );
}