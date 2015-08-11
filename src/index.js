/*jshint esnext:true*/
module.exports = function ({ Plugin, types: t }) {
    return new Plugin("periscope", {
        visitor: {
            Function: {
                enter(node, parent) {
                    console.log("ENTER: Function", node);
                
                },
                exit(node, parent) {
                
                }
            }   
        }
    });
};
