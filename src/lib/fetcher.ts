type MediaType = "tv" | "movie"

export type Show = {
    adult: boolean
    backdrop_path: string | null
    media_type: MediaType
    budget: number | null
    homepage: string | null
    showId: string
    id: number
    imdb_id: string | null
    original_language: string
    original_title: string | null
    overview: string | null
    popularity: number
    poster_path: string | null
    number_of_seasons: number | null
    number_of_episodes: number | null
    release_date: string | null
    first_air_date: string | null
    last_air_date: string | null
    revenue: number | null
    runtime: number | null
    status: string | null
    tagline: string | null
    title: string | null
    name: string | null
    video: boolean
    vote_average: number
    vote_count: number
  }

export async function getShow(mediaType:MediaType){
    const [
        netflixRes,
        trendingRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        docRes,
      ] = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
        ),
        fetch(
          `https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
        ),
        fetch(
          `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_networks=213`
        ),
        fetch(
          `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=28`
        ),
        fetch(
          `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=35`
        ),
        fetch(
          `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=27`
        ),
        fetch(
          `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=10749`
        ),
        fetch(
          `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=99`
        ),
      ])
    
      if (
        !trendingRes.ok ||
        !topRatedRes.ok ||
        !netflixRes.ok ||
        !actionRes.ok ||
        !comedyRes.ok ||
        !horrorRes.ok ||
        !romanceRes.ok ||
        !docRes.ok
      ) {
        throw new Error("Failed to fetch shows")
      }
    
      const [trending, topRated, netflix, action, comedy, horror, romance, docs] =
        (await Promise.all([
          trendingRes.json(),
          topRatedRes.json(),
          netflixRes.json(),
          actionRes.json(),
          comedyRes.json(),
          horrorRes.json(),
          romanceRes.json(),
          docRes.json(),
        ])) as { results: Show[] }[]
    
      return {
        trending: trending?.results,
        topRated: topRated?.results,
        netflix: netflix?.results,
        action: action?.results,
        comedy: comedy?.results,
        horror: horror?.results,
        romance: romance?.results,
        docs: docs?.results,
      }
}