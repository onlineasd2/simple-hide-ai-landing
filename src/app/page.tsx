export default function Home() {
    return (
        <>
            <section className="relative min-h-screen bg-[#f0f0f0] text-[#212121] flex justify-center px-4 sm:px-8 lg:px-[120px] overflow-hidden">
                {/* Colored orbs behind glass */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-50" style={{background: "radial-gradient(circle, #3B82F6 0%, rgba(59,130,246,0) 70%)"}} />
                    <div className="absolute top-40 right-32 w-72 h-72 rounded-full blur-3xl opacity-45" style={{background: "radial-gradient(circle, #EF4444 0%, rgba(239,68,68,0) 70%)"}} />
                    <div className="absolute bottom-32 left-40 w-64 h-64 rounded-full blur-3xl opacity-55" style={{background: "radial-gradient(circle, #F59E0B 0%, rgba(245,158,11,0) 70%)"}} />
                    <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full blur-3xl opacity-40" style={{background: "radial-gradient(circle, #8B5CF6 0%, rgba(139,92,246,0) 70%)"}} />
                    <div className="absolute top-60 left-1/2 w-48 h-48 rounded-full blur-3xl opacity-35" style={{background: "radial-gradient(circle, #10B981 0%, rgba(16,185,129,0) 70%)"}} />
                </div>
                
                {/* Frosted glass overlay */}
                <div className="absolute inset-0 bg-white/25 backdrop-blur-md frosted-glass"></div>
                
                <div className="relative w-full max-w-[1440px] md:pb-[140px] md:pt-[60px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
                    <div className="lg:pl-30 lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                            <img
                                className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] object-contain"
                                src="/logo.webp"
                                alt="Logo"
                            />
                            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-[#3A52B3] font-bold">
                                <span className="whitespace-nowrap ">Hidden AI</span> App
                            </h2>
                        </div>

                        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                            Ace Interviews
                            <br />
                            with a{" "}
                            <span className="whitespace-nowrap bg-[#EDB55E] text-(--color-accent) px-2 py-1 rounded">
                                Hidden AI
                            </span>
                            <br />
                            Assistant
                        </h1>

                        <p className="mt-4 text-base sm:text-lg lg:text-xl text-[#212121]">
                            Use powerful AI tools during interviews
                            <br />
                            or screen sharing sessions —{" "}
                            <span className="text-(--color-accent) font-semibold">
                                completely invisible to others.
                            </span>
                            <br />
                            Your secret edge to perform with confidence
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6 font-bold text-lg justify-center lg:justify-start">
                            <a href="#cards" className="cursor-pointer hover:bg-(--accent-active) hover:text-white transition-colors w-[140px] h-[52px] rounded-[14px] text-(--color-accent) bg-white border border-(--color-accent) inline-flex items-center justify-center">
                                Learn more
                            </a>
                            <a href="#pricing" className="cursor-pointer hover:bg-(--accent-active) hover:text-white transition-colors w-[140px] h-[52px] rounded-[14px] text-white bg-(--color-accent) inline-flex items-center justify-center">
                                Try
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex justify-center">
                        <img
                            className=" w-[300px] sm:w-[400px] md:w-[500px] lg:w-[584px] max-h-[584px] object-contain"
                            src="/app-ui.webp"
                            alt="App UI"
                        />
                    </div>
                </div>
            </section>

            <section id="cards" className="min-h-screen-[540px] bg-[#FFFFFF] text-[#212121] flex justify-center px-4 sm:px-8 lg:px-[120px] py-16">
                <div className="w-full max-w-screen-xl">
                    {/* Заголовок */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 ">
                        Why is this cool?
                    </h2>

                    {/* Карточки */}
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Карточка 1 */}
                        <div className="group cursor-pointer hover:bg-(--accent-active) hover:text-white transition-all flex flex-col items-center text-center p-6 border-(--color-accent) border-3 rounded-xl shadow-sm hover:shadow-md transition">
                            <img
                                src="/like.webp"
                                alt="like"
                                className="w-20 h-20 object-contain mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-(--color-accent) group-hover:text-white">Always at hand</h3>
                            <p className="group-hover:text-white">
                                This is a cool solution for interviews or other moments when you need a hint from AI.
                            </p>
                        </div>

                        {/* Карточка 2 */}
                        <div className="group cursor-pointer hover:bg-(--accent-active) hover:text-white transition-all flex flex-col items-center text-center p-6 border-(--color-accent) border-3  rounded-xl shadow-sm hover:shadow-md transition">
                            <img
                                src="/invisible.webp"
                                alt="invisible"
                                className="w-20 h-20 object-contain mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-(--color-accent) group-hover:text-white">Invisible to others</h3>
                            <p className="group-hover:text-white">
                                This app is protected from all types of screen displays and recordings. It is only visible on your monitor.
                            </p>
                        </div>

                        {/* Карточка 3 */}
                        <div className="group cursor-pointer hover:bg-(--accent-active) hover:text-white transition-all flex flex-col items-center text-center p-6 border-(--color-accent) border-3  rounded-xl shadow-sm hover:shadow-md transition">
                            <img
                                src="/grow.webp"
                                alt="grow"
                                className="w-20 h-20 object-contain mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-(--color-accent) group-hover:text-white">Higher chances of passing an ace interview</h3>
                            <p className="group-hover:text-white">
                                This is a cool solution for interviews or other moments when you need a hint from AI.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-screen-auto bg-gradient-to-br from-[#7D58D9] to-[#9b73ff] text-white flex justify-center px-4 sm:px-8 lg:px-[120px] py-16">
                <div className="flex flex-col gap-6 w-full max-w-6xl">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Левая карточка */}
                        <div className="relative w-full md:w-1/2 rounded-3xl overflow-hidden">
                            <img src="/interviewer-see.webp" alt="What interviewer see" className="w-full h-auto object-cover" />
                            <span className="absolute top-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded-md">What interviewer sees</span>
                        </div>
                        {/* Правая карточка */}
                        <div className="relative w-full md:w-1/2 rounded-3xl overflow-hidden">
                            <img src="/you-see.webp" alt="What you see" className="w-full h-auto object-cover" />
                            <span className="absolute top-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-md">What you see</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white text-[#212121] flex justify-center px-4 sm:px-8 lg:px-[120px] py-16">
                <div className="w-full max-w-screen-xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                        Who It’s For?
                    </h2>
                    <div className="space-y-4 max-w-xl mx-auto text-base sm:text-lg">
                        <p>🧑‍💻 Developers preparing for technical interviews</p>
                        <p>🎓 Students presenting projects or taking online exams</p>
                        <p>🧪 QA engineers & DevOps during live demos</p>
                        <p>👨‍💼 Managers for live interview</p>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-[#7D58D9] to-[#9b73ff] text-[white] flex justify-center px-4 sm:px-8 lg:px-[120px] py-16">
                <div className="w-full max-w-screen-xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        No registration required
                    </h2>
                </div>
            </section>


            <section id="pricing" className="relative bg-[#f0f0f0] text-(--color-accent) flex justify-center px-4 sm:px-8 lg:px-[120px] py-16 overflow-hidden">
                {/* Animated colored orbs behind glass */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-16 left-16 w-72 h-72 rounded-full blur-3xl opacity-85" style={{background: "radial-gradient(circle, #3B82F6 0%, rgba(59,130,246,0) 70%)", animation: "float1 8s ease-in-out infinite"}} />
                    <div className="absolute top-32 right-24 w-64 h-64 rounded-full blur-3xl opacity-80" style={{background: "radial-gradient(circle, #EF4444 0%, rgba(239,68,68,0) 70%)", animation: "float2 10s ease-in-out infinite"}} />
                    <div className="absolute bottom-24 left-32 w-56 h-56 rounded-full blur-3xl opacity-90" style={{background: "radial-gradient(circle, #F59E0B 0%, rgba(245,158,11,0) 70%)", animation: "float3 12s ease-in-out infinite"}} />
                    <div className="absolute bottom-16 right-16 w-48 h-48 rounded-full blur-3xl opacity-75" style={{background: "radial-gradient(circle, #8B5CF6 0%, rgba(139,92,246,0) 70%)", animation: "float4 9s ease-in-out infinite"}} />
                    <div className="absolute top-48 left-1/2 w-40 h-40 rounded-full blur-3xl opacity-70" style={{background: "radial-gradient(circle, #10B981 0%, rgba(16,185,129,0) 70%)", animation: "float5 11s ease-in-out infinite"}} />
                </div>
                
                {/* Frosted glass overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-md frosted-glass"></div>
                
                <div className="relative w-full max-w-screen-xl text-center z-10">
                    <h2 className="max-w-[920px] text-3xl sm:text-4xl mx-auto font-bold mb-12">
                        Use the power of AI during interviews, exams,
                        or live demos — without ever being seen.
                    </h2>
                    <div className="text-left space-y-4 max-w-[720px] mx-auto text-base sm:text-lg">
                        <div className="text-[#212121] bg-white rounded-xl p-12">
                            <h3 className="text-4xl font-bold pb-6 text-(--color-accent)">Invisible AI Assistance</h3>
                            <p>Use powerful AI tools during interviews, tests, and live sessions — without anyone ever seeing them. One click, full access, zero distractions.</p>
                            <p>💡 Stealth mode — completely hidden in screen sharing<br></br>
                                🧠 Multiple AI tools built in<br></br>
                                🔒 No signup, fully anonymous<br></br>
                                🖥️ Only Windows (Mac OS coming soon)</p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-6 font-bold text-lg justify-center lg:justify-center md: items-center">
                                <button className="cursor-pointer hover:bg-(--accent-active) hover:text-white transition-colors duration-200 w-[180px] h-[52px] rounded-[14px] text-(--color-accent) bg-white border border-(--color-accent)">
                                    <a href="https://mailonline.gumroad.com/l/simplehiddenai?wanted=true">5$/month</a>
                                </button>
                                <button className="cursor-pointer hover:bg-(--accent-active) hover:text-white transition-colors w-[180px] h-[52px] rounded-[14px] text-white bg-(--color-accent)">
                                    <a href="https://mailonline.gumroad.com/l/onuuv?wanted=true">$48/year(-20%)</a>
                                </button>
                            </div>
                            <p className="mt-4 text-xs text-gray-500 text-center">
                                By purchasing, you agree to NOT dispute any payments! There is a zero refund policy for every payments!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}