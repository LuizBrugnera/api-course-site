const { Course, Module } = require('../models');

module.exports = {
  createCourse: async (courseData) => {
    return await Course.create(courseData);
  },

  getAllCourses: async () => {
    return await Course.findAll({
      include: [Module],
    });
  },

  getCourseById: async (id) => {
    return await Course.findByPk(id, {
      include: [Module],
    });
  },

  updateCourse: async (id, updateData) => {
    const course = await Course.findByPk(id);
    if (course) {
      await course.update(updateData);
      return course;
    }
    throw new Error('Curso não encontrado');
  },

  deleteCourse: async (id) => {
    const course = await Course.findByPk(id);
    if (course) {
      await course.destroy();
      return true;
    }
    throw new Error('Curso não encontrado');
  },
};
