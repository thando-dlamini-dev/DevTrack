// import { searchPopularStacks, searchReposByStack } from "../lib/octokit.config.js";

// export const fetchPopularStacks = async (req, res) => {
//     try {
//         const { stackName } = req.body;
//         if(!stackName){
//             return res.status(400).json({success: false, message: "Tech stack is required"});
//         }

//         const repos = await searchPopularStacks(stackName);

//         res.status(200).json({success: true, message: "Repos fetched successfully", repos});
//     } catch (error) {
//         console.log("Error in fetchPopularStacks endpoint:", error);
//         res.status(500).json({success: false, message: "Error while fetching repos", error});
//     }
// }

// export const fetchReposByStack = async (req, res) => {
//     try {
//         let stack
//         if(req.body){
//             console.log("body", req.body);
//             stack = req.body.stack
//         }
//         if(!stack){
//             return res.status(400).json({success: false, message: "Tech stack is required"});
//         }

//         const repos = await searchReposByStack(stack);

//         res.status(200).json({success: true, message: "Repos fetched successfully", repos});
//     } catch (error) {
//         console.log("Error in fetchReposByStack endpoint:", error);
//         res.status(500).json({success: false, message: "Error while fetching repos", error});
//     }
// }