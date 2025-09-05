import React from 'react';

const ProjectListPage: React.FC = () => {
    return (
        <div className="p-8 h-full flex flex-col items-center justify-center text-center bg-slate-100 dark:bg-slate-900">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Project List</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
                This section is currently under development.
            </p>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
                Soon, you will be able to track ongoing research projects here.
            </p>
        </div>
    );
};

export default ProjectListPage;
