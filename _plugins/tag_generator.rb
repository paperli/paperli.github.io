Jekyll::Hooks.register :posts, :post_write do |post|
  all_existing_tags = Dir.entries("_tags")
    .map { |t| t.match(/(.*).md/) }
    .compact.map { |m| m[1] }

  tags = post['tags'].reject { |t| t.empty? }
  tags.each do |tag|
    slug = tag.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
    generate_tag_file(tag, slug) if !all_existing_tags.include?(slug)
  end
end
  
def generate_tag_file(tag, slug)
  puts slug
  File.open("_tags/#{slug}.md", "wb") do |file|
    file << "---\nlayout: tags\ntag-name: #{tag}\n---\n"
  end
end