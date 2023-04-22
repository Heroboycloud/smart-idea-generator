 function article (word) {
                var vocals = ['a', 'e', 'i', 'o', 'u', 'y'];
                
                if (vocals.indexOf(word.charAt(0).toLowerCase()) == -1) {
                    return "a " + word;
                } else {
                    return "an " + word;   
                }
            }
            
            function rand (arr) {
                return arr[Math.floor(Math.random() * arr.length)];
            }
            
            function generate () {
                var projectTypes = ["game"];
                var gameGenres = ["FPS", "platformer", "idle", "sandbox", "strategy", "action", "shoot 'em up", "stealth", "adventure", "RPG", "simulation", "tower defence", "racing"];
                var foods = ["cookies", "apples", "candies", "bananas", "mushrooms", "fishes", "nuclear waste", "books", "brains"];
                var collectibles = ["coins", "gems", "weapons", "gold", "spells", "calculators", "stones"];
                var enemies = ["enemies", "yourself", "Bowser", "AIs", "dragons", "your nemesis", "turrets", "racists"];
                var personality = ["good", "nice", "friendly", "mean", "evil", "crazy", "dead", "pixelated", "free"];
                var places = ["world wonders", "houses", "buildings", "bridges", "forests", "parks"];
                var movement = ["cars", "planes", "trains", "buses", "bikes", "motorbikes", "spaceships"];
                
                var enemy = rand(enemies);
                var things = [rand(foods), ((Math.random() > 0.5 || (enemy == "your nemesis")) ? "" : rand(personality) + " ") + enemy, rand(places), rand(movement)];
                var earnables = [rand(foods), rand(collectibles)];
                
                var beings = ["god", "ninja", "progammer", "butterfly", "vampire", "owl", "tree", "magician"];
                var doingVerbs = ["shoot", "eat", "kill", "throw", "spend time with", "explode", "kiss", "destroy", "hug", "protect", "burn", "collect"];
                var must = ["have to", "need to", "must", "can"];
                
                var adjectives = ["useless", "useful", "waste of time", "crazy", "stupid", "clever", "awesome", "cool"];
                
                var goalVerbs = ["survive", "evolve", "become " + article(rand(personality)) + " " + rand(beings), "get " + rand(earnables), "devolve", "win the game", "die happily", "be able to sleep", "start a new project", "find out everything you just did was " + rand(adjectives)];
                
                var type = rand(projectTypes);
                
                var idea = "";
                
                if (type = "game") {
                    var genre = rand(gameGenres);
                    idea += article(genre) + " game where you ";
                    idea += rand(must) + " " + rand(doingVerbs) + " " + rand(things) + " to " + rand(goalVerbs);
                    idea += ".";
                }
                if (Math.random() < 0.001) idea = "<insert a cool idea here>";
                else if (Math.random() < 0.001) idea = "a game where is an AI saying 'there will be cake'";
                else if (Math.random() < 0.001) idea = "a game where you have to press Alt + F4 to move";
                else if (Math.random() < 0.001) idea = "such game, very wow!";
                document.getElementById("idea").innerHTML = idea;
            }