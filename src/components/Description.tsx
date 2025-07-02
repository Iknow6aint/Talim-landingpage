import Image from "next/image";

export default function Description() {
  return (
    <div className="w-full max-w-[856px] mx-auto text-center py-12 mt-10 ">
      {/* Heading */}
      <div className="max-w-[367px] sm:max-w-[845px]">
        <h1 className="text-[35px] sm:text-[40px] font-semibold text-[#1A1A1A] leading-[116.7%]">
          Complete Education Management <span className="text-blue-600">Made Simple</span>
        </h1>
        <p className="mt-10 text-[18px] text-[#767676] max-w-[650px] mx-auto leading-[124.7%]">
          Talim delivers a comprehensive suite of tools that streamline school operations, enhance communication, and drive educational excellence. Transform how your institution manages learning with our proven, data-driven platform.
        </p>
      </div>

      {/* Image Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <div className="bg-[#E9F5FF] px-4 pt-4 rounded-2xl flex flex-col border-[#F4F4F4]">
          <div className="mb-2">
            <button className="bg-white border border-[#229EFF] text-[#229EFF] px-2 py-1 rounded-full flex items-center gap-2 ">
              Student Analytics
            </button>
          </div>
          <div className="max-w-[309px]">
            <h2 className="font-medium text-[19px] ">
              Comprehensive Student Data Management
            </h2>
            <p className="text-[15px] text-[#767676]">
              Track attendance, grades, performance analytics, and behavioral insights with advanced reporting and predictive analytics for early intervention.
            </p>
          </div>
          <Image
            src="/confirmed.svg"
            alt="Confirmed Attendance"
            width={316}
            height={316}
            className="self-center"
          />
        </div>
        <div className="bg-[#E5F9EE] px-4 pt-4 rounded-2xl flex flex-col border-[#F4F4F4]">
          <div className="mb-2">
            <button className="bg-white border border-[#00C159] text-[#00C159]  px-2 py-1 rounded-full flex items-center gap-2 ">
              Real-Time Communication
            </button>
          </div>
          <div className="max-w-[309px]">
            <h2 className="font-medium text-[19px] ">
              Seamless Multi-Stakeholder Communication
            </h2>
            <p className="text-[15px] text-[#767676]">
              Enable transparent, instant communication between teachers, parents, students, and administrators with automated notifications and progress updates.
            </p>
          </div>
          <Image
            src="/messages.svg"
            alt="Messages illustration"
            width={316}
            height={316}
            className="self-center"
          />
        </div>
        <div className="bg-[#FFF8E5] px-4 pt-4 rounded-2xl flex flex-col border border-[#F4F4F4]">
          <div className="mb-2">
            <button className="bg-white border border-[#FFBE00] text-[#FFBE00]  px-2 py-1 rounded-full flex items-center gap-2 ">
              Content Management
            </button>
          </div>
          <div className="max-w-[309px]">
            <h2 className="font-medium text-[19px] ">
              Advanced Learning Resource Management
            </h2>
            <p className="text-[15px] text-[#767676]">
              Centralize curriculum materials, assignments, and digital resources with version control, accessibility compliance, and multimedia support.
            </p>
          </div>
          <Image
            src="/uploading.svg"
            alt="Uploading illustration"
            width={316}
            height={316}
            className="self-center"
          />
        </div>
        <div className="bg-[#EBFBFC] px-4 pt-4 rounded-2xl flex flex-col border border-[#F4F4F4]">
          <div className="mb-2">
            <button className="bg-white border border-[#39D4DF] text-[#39D4DF]  px-2 py-1 rounded-full flex items-center gap-2 ">
              Enterprise Security
            </button>
          </div>
          <div className="max-w-[309px]">
            <h2 className="font-medium text-[19px] ">
              Bank-Level Security & Compliance
            </h2>
            <p className="text-[15px] text-[#767676]">
              Protect sensitive educational data with military-grade encryption, GDPR compliance, role-based access control, and comprehensive audit trails.
            </p>
          </div>
          <Image
            src="/server.svg"
            alt="Server-rrom illustration"
            width={316}
            height={316}
            className="self-center"
          />
        </div>
      </div>
    </div>
  );
}
