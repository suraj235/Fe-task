import { motion } from "framer-motion";
import { SurveyCardProps } from "@/types/survey";
import { Clock, FileText, Shield } from "lucide-react";

export default function SurveyCard({ survey, index }: SurveyCardProps) {
  const statusColors = {
    active: "bg-green-100 text-green-800 border-green-200",
    completed: "bg-blue-100 text-blue-800 border-blue-200",
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            statusColors[survey.status]
          }`}
        >
          {survey.status.charAt(0).toUpperCase() + survey.status.slice(1)}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
            {survey.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {survey.title}
        </h3>

        {/* Timestamp */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Clock className="w-4 h-4" />
          <time dateTime={survey.timestamp}>
            {formatDate(survey.timestamp)}
          </time>
        </div>

        {/* Sensitive Data Preview */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-gray-600" />
            <span className="text-xs font-semibold text-gray-600 uppercase">
              Encrypted Data
            </span>
          </div>
          <p className="text-sm text-gray-700 line-clamp-2">
            {survey.sensitiveData}
          </p>
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          View Details
        </motion.button>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-blue-50/0 to-blue-100/0 pointer-events-none"
        whileHover={{
          background: [
            "linear-gradient(to bottom right, rgba(219, 234, 254, 0), rgba(191, 219, 254, 0))",
            "linear-gradient(to bottom right, rgba(219, 234, 254, 0.1), rgba(191, 219, 254, 0.2))",
          ],
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}
