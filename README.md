## misc shell commands
cat Cincy311_2022_final.tsv | cut -d $'\t' -f 4 | sort | uniq | egrep -v '^$'
 > SERVICE_CODES
cat Cincy311_2022_final.tsv | cut -d $'\t' -f 3 | sort | uniq | sed -nr 's/^"+(.*)$/"\1/p' | sed -nr 's/"+$/"/p'
cat Cincy311_2022_final.tsv | cut -d $'\t' -f 3 | sort | uniq | sed -nr 's/^"+(.*)$/"\1/p' | sed -nr 's/"+$/"/p' | wc -l
cat Cincy311_2022_final.tsv | cut -d $'\t' -f 3 | sort | uniq | sed -nr 's/^"+(.*)$/"\1/p' | sed -nr 's/"+$/"/p' | sed -nr 's/(.*)/  \1: 0,/p' > dict_service_name
cat Cincy311_2022_final.tsv | sed -nr '/^""[^"]+/p' | cut -c-20 
cat Cincy311_2022_final.tsv | sed -nr '/[^"]+""[^"]+/p' >  2quotes
