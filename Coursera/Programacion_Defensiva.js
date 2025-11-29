function letterFinder(word, match) {
    try {

        let condition1 = typeof word === "string" && word.length >= 2;
        let condition2 = typeof match === "string" && match.length === 1;

        if (condition1 === true && condition2 === true) {

            for (var i = 0; i < word.length; i++) {

                if (word[i] === match) {
                    console.log("Found the", match, "at", i);
                } else {
                    console.log("---No match found at", i);
                }
            }

        } else {
            throw new Error("Please correct arguments to the function.");
        }
    } catch (error) {
        console.error("Ocurrió un error:", error.message);
    }
}

letterFinder("ho","9")
