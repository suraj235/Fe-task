"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Survey } from "@/types/survey";
import SurveyCard from "./SurveyCard";
import SearchFilter from "./SearchFilter";

interface SurveyListProps {
  initialSurveys: Survey[];
}

export default function SurveyList({ initialSurveys }: SurveyListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "title" | "status">("date");

  // Filter and sort surveys
  const filteredSurveys = useMemo(() => {
    let filtered = initialSurveys;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (survey) =>
          survey.title.toLowerCase().includes(query) ||
          survey.category.toLowerCase().includes(query) ||
          survey.sensitiveData.toLowerCase().includes(query)
      );
    }

    // Sort surveys
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "date":
          return (
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          );
        case "title":
          return a.title.localeCompare(b.title);
        case "status":
          return a.status.localeCompare(b.status);
        default:
          return 0;
      }
    });

    return sorted;
  }, [initialSurveys, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Search and Filter */}
      <SearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 text-gray-600"
      >
        <p className="text-sm">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filteredSurveys.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">
            {initialSurveys.length}
          </span>{" "}
          surveys
        </p>
      </motion.div>

      {/* Survey Grid */}
      {filteredSurveys.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSurveys.map((survey, index) => (
              <SurveyCard key={survey.id} survey={survey} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            No surveys found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Search
          </button>
        </motion.div>
      )}
    </div>
  );
}
