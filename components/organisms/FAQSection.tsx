"use client";

import { useState, useCallback, useMemo } from "react";
import clsx from "clsx";
import Container from "@/components/atoms/Container";
import Text from "@/components/atoms/Text";
import Pagination from "../molecules/Pagination";
import { FAQItem, FAQ_DATA, FAQ_PER_PAGE } from "@/constants/faq";

const FAQ_SECTION = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const toggleFAQ = useCallback((id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const filteredFAQ = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return FAQ_DATA.filter(
      (item) =>
        item.question.toLowerCase().includes(lowerSearch) ||
        item.answer.toLowerCase().includes(lowerSearch),
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredFAQ.length / FAQ_PER_PAGE);
  const startIndex = (currentPage - 1) * FAQ_PER_PAGE;
  const currentFAQ = filteredFAQ.slice(startIndex, startIndex + FAQ_PER_PAGE);

  const totalVisible = filteredFAQ.length;
  const showingStart = startIndex + 1;
  const showingEnd = Math.min(startIndex + FAQ_PER_PAGE, totalVisible);

  return (
    <section className="py-24 bg-[#FFFFFF] from-slate-50 to-white">
      <Container maxWidth="2xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Text variant="h2" weight="semibold" className="text-gray-900 mb-4">
            Frequently Asked Questions
          </Text>
          <Text variant="body-lg" className="text-gray-600">
            Find answers to common questions about Seamless connectivity and
            setup
          </Text>
        </div>

        <div className="max-w-[900px] mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Search */}
          <div className="p-6 border-b border-gray-100">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
              />
            </div>
          </div>

          {/* FAQ List */}
          <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
            {currentFAQ.length === 0 ? (
              <div className="p-12 text-center">
                <Text variant="body" className="text-gray-500 mb-2">
                  No FAQs found
                </Text>
                <Text variant="caption" className="text-gray-400">
                  Try a different search term
                </Text>
              </div>
            ) : (
              currentFAQ.map((faq) => (
                <div
                  key={faq.id}
                  className="border-b border-gray-50 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors duration-200 group"
                    aria-expanded={openId === faq.id}
                  >
                    <Text
                      variant="body"
                      weight="medium"
                      className={clsx(
                        "text-left",
                        openId === faq.id
                          ? "text-black font-semibold"
                          : "text-gray-900",
                      )}
                    >
                      {faq.question}
                    </Text>
                    <span className="text-xl font-semibold">
                      {openId === faq.id ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={clsx(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      openId === faq.id
                        ? "max-h-96 opacity-100 p-6 pt-0"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <Text
                      variant="body"
                      className="text-gray-600 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </Text>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing {showingStart}-{showingEnd} of {totalVisible} entries
                </div>
                <Pagination
                  total={totalVisible}
                  page={currentPage}
                  limit={FAQ_PER_PAGE}
                  onChange={setCurrentPage}
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FAQ_SECTION;
