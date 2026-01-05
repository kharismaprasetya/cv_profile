import Image from "next/image";

export default function Experience() {
  return (
    <section className="experience">
      <div className="py-[120px] px-[60px]">
        <div>
          <Image className="w-[34px]" width={34} height={35} src="/icons/sparkle.svg" alt="Sparkle" />
          <div className="flex justify-between items-center">
            <div><h2 className="text-4xl font-bold">My <span className="text-brand">Experience</span></h2></div>
            <div>
              <a 
              href="#"
              className="btn btn-primary mt-4 inline-flex items-center gap-2"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}