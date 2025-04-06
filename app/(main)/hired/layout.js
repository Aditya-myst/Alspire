export const metadata = {
    title: "Hiring Process – SkillForge",
    description: "Secure and intelligent hiring process powered by blockchain and AI.",
  };
  
  export default function HiringLayout({ children }) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 px-4 py-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">🛡️ Secure Hiring Process</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            AI + Blockchain = Transparent, Trustworthy & Future-Proof Hiring
          </p>
        </header>
        <main className="max-w-5xl mx-auto">{children}</main>
      </div>
    );
  }
  