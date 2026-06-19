import { useEffect, useState } from "react";
import axios from "axios";
import { ADMIN } from "@/constants/testIds";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const AdminPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API}/contacts`)
      .then(res => setContacts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#FAFAFA] p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] mb-2">Admin Panel</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-light text-[#FAFAFA]">
              Lead Inquiries
            </h1>
          </div>
          <a href="/" className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">
            Back to Site
          </a>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-20 text-[#71717A]">
            <p className="text-lg">No inquiries yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto" data-testid={ADMIN.table}>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-xs tracking-[0.15em] uppercase text-[#A1A1AA]">Name</th>
                  <th className="text-left py-4 px-4 text-xs tracking-[0.15em] uppercase text-[#A1A1AA]">Mobile</th>
                  <th className="text-left py-4 px-4 text-xs tracking-[0.15em] uppercase text-[#A1A1AA]">Requirement</th>
                  <th className="text-left py-4 px-4 text-xs tracking-[0.15em] uppercase text-[#A1A1AA]">Date</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c, i) => (
                  <tr key={c.id || i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-[#FAFAFA] font-medium">{c.name}</td>
                    <td className="py-4 px-4 text-[#A1A1AA]">{c.mobile}</td>
                    <td className="py-4 px-4 text-[#A1A1AA] max-w-xs truncate">{c.requirement}</td>
                    <td className="py-4 px-4 text-[#71717A] text-sm">
                      {c.created_at ? new Date(c.created_at).toLocaleDateString("en-IN", {
                        day: "numeric", month: "short", year: "numeric"
                      }) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-6 text-xs text-[#71717A]">Total: {contacts.length} inquiries</p>
      </div>
    </div>
  );
};

export default AdminPage;
