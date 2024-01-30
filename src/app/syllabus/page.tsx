"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {

  name: string;
  universityEnrollmentNumber: string;
  program: string;
  syllabusRating: string;
  about: string;
  parentMailId: string;
}

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    universityEnrollmentNumber: '',
    program: 'M.A (English)',
    syllabusRating: '',
    about: '',
    parentMailId: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSyllabusRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({ ...prevFormData, syllabusRating: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    console.log('Form submitted:', formData);
  };

  return (

    <section className="p-10 h-[100%]">

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">

        <div className="space-y-6">

          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Feedback on Syllabus and Contents</h2>

            <p className="text-gray-600">
              The questionnaire aims to obtain feedback from students to strengthen the quality of the curriculum. Your responses will help the management explore opportunities to achieve excellence in the development of the curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name of Student
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-2 py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
              />
            </div>

            <div>
              <label htmlFor="university-enrollment-number" className="block text-sm font-medium text-gray-700">
                University Enrollment Number
              </label>
              <input
                type="text"
                name="universityEnrollmentNumber"
                id="university-enrollment-number"
                autoComplete="given-name"
                value={formData.universityEnrollmentNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-2 py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="program" className="block text-sm font-medium text-gray-700">
              Select Program
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-2 py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
            >
              <option>M.A (English)</option>
              <option>M.A In Hindu Studies</option>
              <option>M.A In Sanskrit</option>
              <option>MPA Odissi Dance</option>
              <option>MSc in Psychology and Contemplative Studies</option>
              <option>MSc Osteopathy</option>
            </select>
          </div>

          <fieldset>
            <legend className="text-sm font-semibold text-gray-700">
              Rate the syllabus of the courses that you have studied in relation to the competencies expected out of the course?
            </legend>
            <div className="mt-4 space-y-2.5">

            </div>
          </fieldset>

          <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
              Suggest any addition and deletion in the course content.
            </label>
            <textarea
              id="about"
              name="about"
              rows={3}
              value={formData.about}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-2 py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
            ></textarea>
            <p className="mt-1 text-sm text-gray-600">Write a few words</p>
          </div>

          <div>
            <label htmlFor="parent-mail-id" className="block text-sm font-medium text-gray-700">
              Provide E-mail Id of your parents/Gradian.
            </label>
            <input
              type="text"
              name="parentMailId"
              id="parent-mail-id"
              autoComplete="given-name"
              value={formData.parentMailId}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-2 py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default FeedbackForm;
