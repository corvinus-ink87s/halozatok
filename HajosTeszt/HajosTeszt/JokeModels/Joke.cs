using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.JokeModels
{
    public class Joke
    {
        public int JokeSk { get; set; }
        public string JokeText { get; set; }
        public int UpVotes { get; set; }
        public int DownVotes { get; set; }
    }
}
