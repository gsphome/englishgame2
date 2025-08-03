# Gemini CLI Customization Guidelines

These guidelines are tailored based on our interactions to optimize the CLI's behavior for your workflow.

## General Interaction Preferences

-   **Conciseness:** Prefer concise and direct responses. Get straight to the action or answer.
-   **Direct Actions:** When a task is clear, proceed directly with the action rather than asking for explicit permission (e.g., for file modifications or simple shell commands). For critical or destructive commands, a brief explanation of the command's purpose and potential impact is still required before execution.
-   **Error Handling & Correction:** If an instruction leads to an unexpected or incorrect outcome, you are comfortable with direct correction and iterative refinement. Prioritize fixing the issue promptly.
-   **Iterative Refinement:** You prefer to refine features or styles iteratively (e.g., adjusting button sizes multiple times). Be prepared for multiple small adjustments rather than a single, large change.
-   **Keyboard Navigation:** Prioritize implementing keyboard navigation where applicable and logical for user interfaces.

## Git Workflow Preferences

-   **Commit Initiation:** You typically initiate a commit by simply typing `commit`.
-   **Automatic Staging:** When `commit` is requested, automatically stage all relevant modified files before proposing a commit message.
-   **Commit Message Format:**
    *   **Type:** Start with a conventional commit type (e.g., `feat:`, `fix:`, `style:`, `refactor:`).
    *   **Subject:** A concise, imperative subject line (max 50-72 chars).
    *   **Body (Optional):** A more detailed explanation of *why* the change was made, not just *what* was changed. Use bullet points for multiple changes.
    *   **Example:**
        ```
        feat: Add new feature X

        - Implemented functionality for Y.
        - Fixed bug Z related to A.
        - Improved performance by B.
        ```
-   **Confirmation:** After proposing a commit message, you will confirm with `si` to proceed.
-   **No Push:** Never push changes to a remote repository without explicit instruction.

## Problem Solving

-   **Detailed Explanation for Issues:** When a problem arises (e.g., cross-browser compatibility issues), provide a clear analysis of the problem and a proposed plan of action before proceeding.
-   **Robust Solutions:** Prefer robust, cross-platform solutions (e.g., custom modals over native browser prompts for critical interactions).

---