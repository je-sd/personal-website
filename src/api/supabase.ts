import { createClient } from '@supabase/supabase-js'
import { BlogPostModel } from './model/BlogPostModel';
const supabase = createClient(process.env.REACT_APP_SUPABASE_URL!, process.env.REACT_APP_SUPABASE_API_KEY!);

const fetchBlogPosts = async (): Promise<Array<BlogPostModel>> => {
    const { data, error } = await supabase
        .from("blogposts")
        .select();

    if (error != null) {
        throw new Error("Failed while fetching Supabase data!");
    }

    return data
        .map(p => new BlogPostModel(p.id, p.created_at, p.created_by, p.heading, p.content));
};

const fetchSingleBlogPost = async (id: number): Promise<BlogPostModel> => {
    const { data, error } = await supabase
        .from("blogposts")
        .select()
        .eq("id", id);

    if (error != null) {
        throw new Error("Failed while fetching Supabase data!");
    }

    const blogPost = data[0];
    return new BlogPostModel(blogPost.id, blogPost.created_at, blogPost.created_by, blogPost.heading, blogPost.content);
};

export const Supabase = {
    fetchBlogPosts,
    fetchSingleBlogPost,
}
