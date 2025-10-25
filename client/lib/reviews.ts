import { supabase, Review } from './supabase'

// Add a new review to the database
export const addReview = async (reviewData: Omit<Review, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .insert([reviewData])
      .select()
      .single()

    if (error) {
      throw error
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error adding review:', error)
    return { data: null, error }
  }
}

// Fetch random 5 reviews from the database
export const getRandomReviews = async (limit: number = 5) => {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) {
      throw error
    }

    // Shuffle the array to get random reviews
    const shuffled = data ? [...data].sort(() => Math.random() - 0.5) : []
    return { data: shuffled, error: null }
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return { data: [], error }
  }
}

// Get all reviews (for admin purposes)
export const getAllReviews = async () => {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return { data, error: null }
  } catch (error) {
    console.error('Error fetching all reviews:', error)
    return { data: [], error }
  }
}

// Delete a review (for admin purposes)
export const deleteReview = async (id: number) => {
  try {
    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id)

    if (error) {
      throw error
    }

    return { error: null }
  } catch (error) {
    console.error('Error deleting review:', error)
    return { error }
  }
}
