import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-4">
      <Image
        src={"https://www.depts.ttu.edu/cs/faculty/victor_sheng/ShengliSheng_400.jpg"}
        width={200}
        height={400}
        alt="Home Page Picture"/>
      <section>
        <h2 className="text-2xl font-bold mb-2">Director Information</h2>
        <p>Victor S. Sheng</p>
        <p>Department of Computer Science</p>
        <p>Texas Tech University</p>
        <p className="mb-6">Email: victor.sheng@ttu.edu</p>
        <p className="mb-6">
          I am looking for self-motivated, creative and hard-working 
          Ph.D. students. Please feel free to email me your CV if you 
          are interested in my research. TTU is a Carnegie Research I 
          university.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <p className="mb-2">NSERC Postdoctoral Fellow Leonard N. Stern School of Business, New York University, USA September 2007 - August 2009</p>
        <p className="mb-2">Ph.D., Computer Science The University of Western Ontario, London, Ontario, Canada August 2007</p>
        <p className="mb-2">M.Sc., Computer Science University of New Brunswick, Fredericton, New Brunswick, Canada December 2003</p>
        <p className="mb-6">M.Sc.E., Computer Engineering Suzhou University, Suzhou, Jiangsu, China July 1999</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Awards</h2>
        <p className="mb-2">Student Best Paper Award Finalist, The Sixteenth International Conference on Web Information System Engineering (WISE 2015)</p>
        <p className="mb-2">Best Paper Award, 11th Industrial Conference on Data Mining ICDM, 2011</p>
        <p className="mb-2">Best Paper Award Runner-Up, ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD08), 2008</p>
        <p className="mb-6">Best Poster Award, The UW and IEEE Kitchener-Waterloo Section Joint Workshop on Knowledge and Data Mining (2006), University of Waterloo, ON, Canada</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Mission Statement</h2>
          <p className="mb-6">
            The Data-Intensive Scalable Computing Laboratory (DISCL) at 
            the Texas Tech University has broad research interests in 
            parallel and distributed computing, high-performance computing, 
            cloud computing, computer architectures, and systems software 
            with a focus on building scalable computing systems for 
            data-intensive applications in high-performance scientific 
            computing/high-end enterprise computing.
          </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-2">Research Areas</h2>
        <p className="mb-6">
        Crowdsourcing, deep learning, data science, data mining, machine learning, big data analytics, natural language processing, spatial database, information retrieval, data privacy and security, and decision support, and their applications in business, industry, medical informatics, and software engineering.
        </p>
      </section>
    </div>
  );
}