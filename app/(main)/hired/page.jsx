// page.jsx for /hired route - Blockchain Based Hiring Workflow
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, FileCheck2, LockKeyhole, ShieldCheck, DatabaseZap, Sparkles, UserCheck, Workflow } from "lucide-react";

export default function GetHiredPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <LockKeyhole className="text-green-600" />
            Blockchain Integration
          </h2>
          <p>
            Every resume, cover letter, quiz attempt, and interview feedback is recorded on a private, permissioned blockchain network.
            This ensures that your data remains tamper-proof and accessible only to verified recruiters.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FileCheck2 className="text-blue-600" />
            Transparent Skill Verification
          </h2>
          <p>
            Recruiters can view a smart contract-verified portfolio, including AI-analyzed performance stats, quiz scores, and mock interview results.
            No more fake resumes — just verified skills.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <BadgeCheck className="text-yellow-600" />
            Smart Contract Based Hiring Flow
          </h2>
          <p>A smart contract automates the entire hiring process:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>📄 Step 1: Submit Resume + Cover Letter</li>
            <li>🧠 Step 2: Attempt AI Quiz tailored to job description</li>
            <li>🎙 Step 3: Appear in Mock Interview with AI evaluation</li>
            <li>🛡 Step 4: Recruiter views blockchain-verified profile</li>
            <li>🔁 Step 5: Smart contract triggers interview/offer flow</li>
            <li>✅ Step 6: Record offer/acceptance immutably</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ShieldCheck className="text-purple-600" />
            Why Blockchain for Hiring?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🔐 Tamper-proof proof-of-work or PoA record of skills</li>
            <li>💼 Decentralized trust between applicants and recruiters</li>
            <li>📜 Transparent contract-driven hiring stages</li>
            <li>⛓ Eliminate bias and centralized control over resumes</li>
            <li>📈 Resume/CV growth verified across time, via smart logs</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <DatabaseZap className="text-rose-600" />
            Sample Blockchain Record (Mock)
          </h2>
          <pre className="bg-gray-900 text-white p-4 rounded-md text-sm overflow-auto">
{`{
  userId: "0x1234...abcd",
  resumeHash: "Qm...hash",
  quizScore: 92,
  aiFeedback: "Excellent communication and problem-solving.",
  mockInterviewScore: 88,
  status: "Verified",
  timestamp: "2025-04-07T12:00:00Z"
}`}
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Workflow className="text-orange-500" />
            End-to-End Hiring Workflow
          </h2>
          <p>
            Our platform simplifies the hiring journey with a fusion of AI + Blockchain:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>User registers and uploads resume/CV.</li>
            <li>System hashes the document and logs it to blockchain.</li>
            <li>User attempts role-specific AI quiz for skill mapping.</li>
            <li>Mock interview with AI gives performance review.</li>
            <li>Recruiter browses the verified portfolio.</li>
            <li>Smart contract initiates offer flow after approval.</li>
            <li>Candidate responds, and result is stored immutably.</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Sparkles className="text-cyan-600" />
            Extra Features Coming Soon 🚀
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🎯 AI-based job matching engine</li>
            <li>🛠 Portfolio skill heatmap analytics</li>
            <li>📊 Recruiter dashboard with verified insights</li>
            <li>🎥 Video resume blockchain verification</li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center mt-6">
        <Button className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md hover:shadow-xl">
          🚀 Start Hiring Journey Now
        </Button>
      </div>
    </div>
  );
}