CREATE DATABASE ondor_portofolio;
USE ondor_portofolio;

-- Table for Graphic Design pictures
CREATE TABLE graphic_design (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    file_path VARCHAR(255) NOT NULL,
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table for Art pictures
CREATE TABLE my_art (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    file_path VARCHAR(255) NOT NULL,
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table for GitHub repositories
CREATE TABLE github_repos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    repo_link VARCHAR(512) NOT NULL, -- Increased size for URL
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP
);