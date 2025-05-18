import Image from "next/image";

export default function Description() {
  return (
    <div className="w-full max-w-[856px] mx-auto text-center py-12 mt-10 ">
      {/* Heading */}
      <div className="max-w-[367px] sm:max-w-[845px]">
        <h1 className="text-[35px] sm:text-[40px] font-semibold text-[#2A2A2A] leading-[116.7%]">
          Everything Schools, Teachers, Parents, and Students Need
        </h1>
        <p className="mt-10 text-[18px] text-[#767676] max-w-[650px] mx-auto leading-[124.7%]">
          Talim brings your entire academic community together with powerful
          tools for management, communication, and learning — all in one secure
          platform.
        </p>
      </div>

      {/* Image Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <div className="bg-[#E9F5FF] px-4 pt-4 rounded-2xl flex flex-col border-[#F4F4F4]">
          <div className="mb-2">
            <button className="bg-white border border-[#229EFF] text-[#229EFF] px-2 py-1 rounded-full flex items-center gap-2 ">
              Manage Students
            </button>
          </div>
          <div className="max-w-[309px]">
            <h2 className="font-medium text-[19px] ">
              All Student Information in One Place
            </h2>
            <p className="text-[15px] text-[#767676]">
              Track attendance, grades, and student progress easily with a smart
              dashboard.
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
              Instant Updates for Parents and Teachers
            </button>
          </div>
          <div className="max-w-[309px]">
            <h2 className="font-medium text-[19px] ">
              Instant Updates for Parents and Teachers
            </h2>
            <p className="text-[15px] text-[#767676]">
              Strengthen relationships between school and home with real-time
              messages and updates.
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
              Manage Students
            </button>
          </div>
          <div className="max-w-[309px]">
            <h2 className="font-medium text-[19px] ">
              Upload and Share Learning Materials Easily
            </h2>
            <p className="text-[15px] text-[#767676]">
              Distribute assignments, notes, and course materials to students
              with a few clicks.
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
              Stay Secure
            </button>
          </div>
          <div className="max-w-[309px]">
            <h2 className="font-medium text-[19px] ">
              Safe and Private for Every User
            </h2>
            <p className="text-[15px] text-[#767676]">
              Protect sensitive student and school data with enterprise-grade
              security.
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
