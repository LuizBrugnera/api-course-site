const courseService = require('../services/courseService');

module.exports = {
  createCourse: async (req, res) => {
    try {
      const course = await courseService.createCourse(req.body);
      res.status(201).json(course);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllCourses: async (req, res) => {
    try {
      const courses = await courseService.getAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCourseById: async (req, res) => {
    try {
      const course = await courseService.getCourseById(req.params.id);
      if (course) {
        res.json(course);
      } else {
        res.status(404).json({ error: 'Curso não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateCourse: async (req, res) => {
    try {
      const course = await courseService.updateCourse(req.params.id, req.body);
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCourse: async (req, res) => {
    try {
      await courseService.deleteCourse(req.params.id);
      res.json({ message: 'Curso excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
