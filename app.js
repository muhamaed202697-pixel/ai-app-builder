
const AppBuilder = {
  projects: [],

  createProject(description) {
    if (!description || description.trim().length < 10) {
      return {
        success: false,
        message: "يرجى كتابة وصف واضح للتطبيق"
      };
    }

    const project = {
      id: Date.now(),
      name: "مشروعي الجديد",
      description: description.trim(),
      platform: "Android",
      status: "draft",
      createdAt: new Date().toISOString()
    };

    this.projects.push(project);
    this.saveProjects();

    return {
      success: true,
      message: "تم إنشاء المشروع بنجاح",
      project: project
    };
  },

  saveProjects() {
    try {
      localStorage.setItem(
        "ai_builder_projects",
        JSON.stringify(this.projects)
      );
    } catch (error) {
      console.error("Save error:", error);
    }
  },

  loadProjects() {
    try {
      this.projects = JSON.parse(
        localStorage.getItem("ai_builder_projects") || "[]"
      );
      return this.projects;
    } catch (error) {
      return [];
    }
  },

  getProjects() {
    return this.loadProjects();
  }
};

window.AppBuilder = AppBuilder;
