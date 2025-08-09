export default function Home() {
    return (
        <>
            <section className="min-h-screen bg-[#f0f0f0] text-[#212121] flex justify-center px-4 sm:px-8 lg:px-[120px]">
                <div className="w-full max-w-[1440px] md:pb-[140px] md:pt-[60px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
                            <button className="cursor-pointer hover:bg-(--accent-active) hover:text-white transition-colors w-[140px] h-[52px] rounded-[14px] text-(--color-accent) bg-white border border-(--color-accent)">
                                <a href="#cards">Learn more</a>
                            </button>
                            <button className="cursor-pointer hover:bg-(--accent-active) hover:text-white transition-colors w-[140px] h-[52px] rounded-[14px] text-white bg-(--color-accent)">
                                <a href="#pricing">Try</a>
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex justify-center">
                        <img
                            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[584px] max-h-[584px] object-contain"
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
                            <p className="text-gray-600 group-hover:text-white">
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
                            <p className="text-gray-600 group-hover:text-white">
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
                            <p className="text-gray-600 group-hover:text-white">
                                This is a cool solution for interviews or other moments when you need a hint from AI.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-screen-auto bg-(--color-accent) text-white flex justify-center px-4 sm:px-8 lg:px-[120px] py-16">
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

            <section className="bg-(--color-accent) text-[white] flex justify-center px-4 sm:px-8 lg:px-[120px] py-16">
                <div className="w-full max-w-screen-xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        No registration required
                    </h2>
                </div>
            </section>


            <section id="pricing" className="bg-[#f0f0f0] text-(--color-accent) flex justify-center px-4 sm:px-8 lg:px-[120px] py-16">
                <div className="w-full max-w-screen-xl text-center">
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
                                    <a href="https://mailonline.gumroad.com/l/simplehiddenai?wanted=true">5$</a>
                                </button>
                                <button className="cursor-pointer hover:bg-(--accent-active) hover:text-white transition-colors w-[180px] h-[52px] rounded-[14px] text-white bg-(--color-accent)">
                                    $48/year(-20%)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}