import * as fs from 'fs';
import * as path from 'path';
import { optimize } from 'svgo';

// Define the structure of each icon
interface Icon {
	id: string;
    name: string;
    svg: string;
}

// Define the structure of the final JSON
interface IconsJSON {
    icons: Icon[];
}

// Folders containing SVG files
const folders = [
    'libs/icons/src/filled/core',
    'libs/icons/src/filled/matchday',
    'libs/icons/src/filled/media',
    'libs/icons/src/filled/retail',
    'libs/icons/src/filled/social',
    'libs/icons/src/outline/core',
    'libs/icons/src/outline/matchday',
    'libs/icons/src/outline/media',
    'libs/icons/src/outline/retail',
    'libs/icons/src/outline/social',
    'libs/icons/src/help-center',
];

const formatId = (name: string) => {
    const splittedName = name.split('-');
    const formattedName = splittedName
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join('');

    return formattedName;
};

// Function to read SVG files from a folder
const readSVGFiles = (folderPath: string): Icon[] => {
    const icons: Icon[] = [];
    const absolutePath = path.resolve(folderPath);

    if (!fs.existsSync(absolutePath)) {
        console.warn(`Folder not found: ${absolutePath}`);

        return icons;
    }

    const files = fs.readdirSync(absolutePath);

    files.forEach((file) => {
        const ext = path.extname(file);
        if (ext.toLowerCase() === '.svg') {
            const name = path.basename(file, ext);
            const filePath = path.join(absolutePath, file);
            const svgContent = fs.readFileSync(filePath, 'utf-8');
            const optimized = optimize(svgContent, { path: filePath });

            if ('data' in optimized) {
                const escapedSVG = optimized.data
                    .replace(/"/g, "'")
                    .replaceAll('var(--svg-base)', '#001838')
                    .replaceAll('var(--svg-contrast)', '#3bd6ff')
                    .replace(/\n/g, '')
                    .replace(/\s+/g, ' ');

                icons.push({
					id: formatId(name),
                    name: name.replaceAll('-', ' '),
                    svg: escapedSVG,
                });
            } else {
                console.warn(`SVGO optimization failed for file: ${filePath}`);
            }
        }
    });

    return icons;
};

// Main function to generate JSON
const generateIconsJSON = (): IconsJSON => {
    const allIcons: Icon[] = [];

    folders.forEach((folder) => {
        const icons = readSVGFiles(folder);

        allIcons.push(...icons);
    });

    return { icons: allIcons };
};

// Write the JSON to a file
const writeJSONToFile = (data: IconsJSON, outputPath: string) => {
    const jsonContent = JSON.stringify(data, null, 0);

    fs.writeFileSync(outputPath, jsonContent, 'utf-8');

    console.log(`JSON file has been saved to ${outputPath}`);
};

const main = () => {
    const iconsJSON = generateIconsJSON();
    const outputPath = path.resolve('apps/core/public/assets/json/icons.json');

    writeJSONToFile(iconsJSON, outputPath);
};

main();
